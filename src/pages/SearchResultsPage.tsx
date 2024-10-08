import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import unorm from "unorm";

const SearchResultsPage = () => {
    const { lang } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    const [articleList, setArticleList] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    // Declarar getData correctamente
    const getData = useCallback(async () => {
        try {
            const response = await axios.get(`https://api.elliotfern.com/blog.php?type=listadoarticulos&lang=${lang}`);
            setArticleList(response.data);
            setIsFetching(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Redireccionar a /error
            navigate("/error");
        }
    }, [lang, navigate]);

    useEffect(() => {
        getData();
    }, [getData]);

    // Filtrar artículos
    const filteredArticles = articleList.filter((article) => {
        const title = article.post_title && unorm.nfd(article.post_title.toLowerCase()); // Normaliza el título
        const queryLowerCase = query && unorm.nfd(query.toLowerCase()); // Normaliza la consulta
        return title && queryLowerCase && title.includes(queryLowerCase);
    });

    if (isFetching) {
        return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>
                <h3>Cargando ... </h3>
            </div>
        );
    }

    // Traducción cadenas de texto
    let webSearchTitle = "";
    let webSearchSubTitle = "";

    switch (lang) {
        case "ca":
            webSearchTitle = "Resultats de la cerca per a ";
            webSearchSubTitle = "Estàs fent una cerca d'articles en català";
            break;
        case "es":
            webSearchTitle = "Resultados de la búsqueda para";
            webSearchSubTitle = "Estás buscando artículos en español";
            break;
        case "en":
            webSearchTitle = "Search results for";
            webSearchSubTitle = "You are searching articles in English";
            break;
        case "fr":
            webSearchTitle = "Résultats de recherche pour";
            webSearchSubTitle = "Vous recherchez des articles en français";
            break;
        case "it":
            webSearchTitle = "Cerca risultati per";
            webSearchSubTitle = "Stai cercando articoli in italiano";
            break;
        default:
            break;
    }

    return (
        <div className="container-principal">
            <div className="content text-article">
                <h2>{webSearchTitle} "{query}":</h2>
                <h5>{webSearchSubTitle}</h5>
                <ul>
                    {filteredArticles.map((article) => (
                        <li key={article.ID}>
                            <Link to={`/${lang}/article/${article.post_name}`}>{article.post_title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchResultsPage;
