import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from "react-router-dom"
import he from 'he';
import { Helmet } from 'react-helmet';

function Course() {

    const [courseArticlesList, setCourseArticlesList] = useState(null)
    const [isFetching, setIsFetching] = useState(true)

    // los Hooks se deben de invocar siempre
    const navigate = useNavigate()
    const { lang, nameCourse } = useParams();

    useEffect(() => {
        getData()

    }, [])

    const getData = async () => {
        try {
            const response = await axios.get(`https://elliotfern.com/controller/blog.php?type=curso&paramName=${nameCourse}&langCurso=${lang}`)
            setCourseArticlesList(response.data)
            setIsFetching(false)
        } catch (error) {
            console.error('Error fetching data:', error);
            // redireccionar a /error
            navigate("/error")

        }
    }

    // Llamar a getTitle después de que article se haya cargado
    useEffect(() => {

        if (courseArticlesList && courseArticlesList[0] && courseArticlesList[0].courseName) {
            getTitle();
        }
    }, [courseArticlesList]);

    const getTitle = () => {
        document.title = `${courseArticlesList[0].courseName} - Open History`;
    }


    if (isFetching === true) {
        return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>
                <h3>Loading ... </h3>
            </div>
        )
    }

    const handleRefresh = () => {
        setIsFetching(true)
        getData()

    }
    // obtener titulo y descripcion del curso
    const primerCurso = courseArticlesList[0];
    const courseName = primerCurso.courseName;
    const courseDescription = primerCurso.descriptionCourse;
    const courseResumen = primerCurso.resumen;

    // traducción cadenas de texto
    let webContenidos = "";
    let webTextNoContent = "";
    let webTextReturns = "";

    if (lang === "es") {
        webContenidos = "Contenidos del curso:"
        webTextNoContent = "Este curso está en preparación";
        webTextReturns = "Volver a la homepage"
    } else if (lang === "en") {
        webContenidos = "Course content:"
        webTextNoContent = "This course is in progress"
        webTextReturns = "Back to homepage"
    } else if (lang === "fr") {
        webContenidos = "Contenuti del corso:"
        webTextNoContent = "Ce cours est en préparation"
        webTextReturns = "Retour à la page d'accueil"
    } else if (lang === "ca") {
        webContenidos = "Continguts del curs:"
        webTextNoContent = "Aquest curs està en preparació"
        webTextReturns = "Torna a la pàgina principal"
    } else if (lang === "it") {
        webContenidos = "Contenuti del corso:"
        webTextNoContent = "Questo corso è in preparazione"
        webTextReturns = "Ritorna alla homepage"
    }
    console.log(courseArticlesList)
    return (
        <>
            {courseArticlesList !== "No rows[]" ?
                <>
                    <Helmet>
                        <meta name="description" content={he.decode(courseResumen)} />
                    </Helmet>

                    <h2 className='text-center'> {he.decode(courseName)}</h2>
                    <h6 className='text-center italic'> {he.decode(courseDescription)}</h6>

                    <h5 className="separador">{webContenidos}</h5>

                    <ListGroup>
                        {courseArticlesList.map((eachArticle) => {
                            return (
                                <ListGroup.Item action key={eachArticle.ID}>
                                    <Link to={`/${lang}/article/${eachArticle.post_name}`} >
                                        {eachArticle.post_title}
                                    </Link>
                                </ListGroup.Item>
                            )
                        }
                        )}
                    </ListGroup>
                </>
                :
                <>
                    <h2>{webTextNoContent}</h2>
                    <br />
                    <Link to={`/${lang}/homepage`}>
                        <button>{webTextReturns}</button>
                    </Link>
                </>
            }


        </>
    )
}

export default Course