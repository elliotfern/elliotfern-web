<?php

# conectare la base de datos
$activePage = "accounting";
include_once('../inc/header.php');


echo '<div class="container">';
echo '<h1>Database</h1>';
echo '<h2>Hispano Atlantic Consulting Ltd - Accounting & CRM</h2>';
echo '<h3>CRM Customers</h3>';

echo "<p><button type='button' class='btn btn-dark btn-sm' id='btnAddNewCostumer' onclick='btnCreateCustomer()' data-bs-toggle='modal' data-bs-target='#modalCreateCustomer'>Add new costumer</button></p>";

echo "<hr>";
echo "<p></p>";

    echo '<div class="'.TABLE_DIV_CLASS.'">';
    echo '<table class="table table-striped datatable" id="customersTable">
        <thead class="'.TABLE_THREAD.'">
        <tr>
            <th>Customer</th>
            <th>Company</th>
            <th>Entry date</th>
            <th>Status</th>
            <th></th>
            <th></th>
    </tr>
    </thead>
    <tbody>
    <tr>
       
    </tr>
 </tbody>
    </table>
    </div>

    </div>
</div>';

include_once('modals-accounting.php');

# footer
include_once('../inc/footer.php');