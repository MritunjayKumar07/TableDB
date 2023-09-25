import React from 'react'
import css from './Reference.module.css';

const Reference = () => {
    return (
        <div id='Reference'>
            <h3 className={css.h3}>Learn</h3>
            <div className={css.LearnBox}>
                <h2> Table Database API Documentation🫠</h2>
                <img border="0" data-original-height="347" data-original-width="578" height="319" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJvnWRKzSSKgAgo0dptLECktuoTyUtjaX2t3nDa2_bmCEFB1aVxXMK3u7u8B32v2vfIhbgbPzhPm3RkHUawJG0itTut0keXoa0JbM047-zOFRzJvFSTwwAhemofMaJLcEgtp-yOsTz-12VnsFQ0ka3dNONVZrAKJgFgIqvjTjsqIPkA0hwn6JWbusCyHro/w532-h319/Emogy-removebg-preview.png" width="532" />
                <h4>Introduction</h4>
                <p>Welcome to the Table Database API! This API allows you to interact with a simple table-based database hosted on Google Sheets. You can create, read, update, and delete tables and their data using this API. Below, you'll find details on each available endpoint and how to use them.</p>

                <h3>Create Table Database 📊</h3>
                <p>Create Google Sheets in Google Drive and share the Google Sheets in <a href="mailto: promocrux@gmail.com">promocrux@gmail.com</a> with editor option & enjoy your TABLE DATABASE 😁. </p>
                <span>Base URL😇</span>
                <p>The base URL for all API endpoints is: <a href="https://goo.by/promocrux" target='_blank'>https://goo.by/promocrux</a></p>
                <span>Endpoints😀</span>

                <h3>Create a New Table📋</h3>
                <span>Endpoint: /createTDB🫠</span>
                <p>Use this endpoint to create a new table in the database.</p>
                <span>Parameters:</span>
                <p>createTDB: Comma-separated string containing Google Sheets document ID and the name of the new table.</p>
                <p>Example: <a href="https://goo.by/promocrux?action=createTDB&createTDB=SECRET_ID,TABLE_NAME" target='_blank'>url?action=createTDB&createTDB=SECRET_ID,TABLE_NAME</a></p>

                <h3>Get Table Names🗃️</h3>
                <span>Endpoint: /getTDBNames🫠</span>
                <p>Use this endpoint to retrieve the names of all existing tables in the database.</p>
                <span>Parameters:</span>
                <p>getTDBNames: Google Sheets document ID.</p>
                <p>Example: <a href="https://goo.by/promocrux?action=getTDBNames&getTDBNames=SECRET_ID" target='_blank'>url?action=getTDBNames&getTDBNames=SECRET_ID</a></p>

                <h3>Delete a Table🗑️</h3>
                <span>Endpoint: /deleteTDB🫠</span>
                <p>Use this endpoint to delete an existing table from the database.</p>
                <span>Parameters:</span>
                <p>deleteTDB: Comma-separated string containing Google Sheets document ID and the name of the table to delete.</p>
                <p>Example: <a href="https://goo.by/promocrux?action=deleteTDB&deleteTDB=SECRET_ID,TABLE_NAME" target='_blank'>url?action=deleteTDB&deleteTDB=SECRET_ID,TABLE_NAME</a></p>

                <h3> Update Table Name🔄</h3>
                <span>Endpoint: /updateTDB🫠</span>
                <p>Use this endpoint to update the name of an existing table.</p>
                <span>Parameters:</span>
                <p>updateTDB: Comma-separated string containing Google Sheets document ID, current table name, and the new table name.</p>
                <p>Example: <a href="https://goo.by/promocrux?action=updateTDB&updateTDB=SECRET_ID,OldTableName,NewTableName" target='_blank'>url?action=updateTDB&updateTDB=SECRET_ID,OldTableName,NewTableName</a></p>

                <h3> Get Table Data📄</h3>
                <span>Endpoint: /getTDBdata🫠</span>
                <p>Use this endpoint to retrieve all data from a specific table.</p>
                <span>Parameters:</span>
                <p>getTDBdata: Comma-separated string containing Google Sheets document ID and the name of the table to retrieve data from.</p>
                <p>Example: <a href="https://goo.by/promocrux?action=getTDBdata&getTDBdata=SECRET_ID,TABLE_NAME" target='_blank'>url?action=getTDBdata&getTDBdata=SECRET_ID,TABLE_NAME</a></p>

                <h3> Find Data in a Table🔍</h3>
                <span>Endpoint: /findTDBdata🫠</span>
                <p>Use this endpoint to find a specific row of data in a table based on a given column value.</p>
                <span>Parameters:</span>
                <p>findTDBdata: Comma-separated string containing Google Sheets document ID, table name, column name, and the value to search for.</p>
                <p>Example: <a href="https://goo.by/promocrux?action=findTDBdata&findTDBdata=SECRET_ID,TABLE_NAME,ColumnName,SearchValue" target='_blank'>url?action=findTDBdata&findTDBdata=SECRET_ID,TABLE_NAME,ColumnName,SearchValue</a></p>

                <h3> Clear Table Data🧹</h3>
                <span>Endpoint: /clearTDB🫠</span>
                <p>Use this endpoint to clear all data from a specific table.</p>
                <span>Parameters:</span>
                <p>clearTDB: Comma-separated string containing Google Sheets document ID and the name of the table to clear data from.</p>
                <p>Example:<a href="https://goo.by/promocrux?action=clearTDB&clearTDB=SECRET_ID,TABLE_NAME" target='_blank'>url?action=clearTDB&clearTDB=SECRET_ID,TABLE_NAME</a></p>

                <h3> Add Single Data to Table➕</h3>
                <span>Endpoint: /addSingleTDBData🫠</span>
                <p>Use this endpoint to add a single row of data to a table.</p>
                <span>Parameters:</span>
                <p>addSingleTDBData: Comma-separated string containing Google Sheets document ID, table name, and data to add (in order of columns).</p>
                <p>Example: <a href="https://goo.by/promocrux?action=addSingleTDBData&addSingleTDBData=SECRET_ID,TABLE_NAME,Column1Value,Column2Value,..." target='_blank'>url?action=addSingleTDBData&addSingleTDBData=SECRET_ID,TABLE_NAME,Column1Value,Column2Value,...</a></p>
                <p>Or if you want to blank column then use space:</p>
                <p>Example: url?action=addSingleTDBData&addSingleTDBData=SECRET_ID,TABLE_NAME,Column1Value, ,Column3Value,..</p>

                <h3> Update Single Data in Table🔄</h3>
                <span>Endpoint: /updateTDBData🫠</span>
                <p>Use this endpoint to update a single value in a table based on a specific column value.</p>
                <span>Parameters:</span>
                <p>updateTDBData: Comma-separated string containing Google Sheets document ID, table name, column name, value to search for, and the new value.</p>
                <p>Example:<a href="https://goo.by/promocrux?action=updateTDBData&updateTDBData=SECRET_ID,TABLE_NAME,ColumnName,SearchValue,NewValue" target='_blank'>url?action=updateTDBData&updateTDBData=SECRET_ID,TABLE_NAME,ColumnName,SearchValue,NewValue</a></p><h3> Delete a Column from Table🗑️</h3>

                <span>Endpoint: /delitTDBkeyColumn🫠</span>
                <p>Use this endpoint to delete a specific column from a table.</p>
                <span>Parameters:</span>
                <p>delitTDBkeyColumn: Comma-separated string containing Google Sheets document ID, table name, and the column name to delete.</p>
                <p>Example:<a href="https://goo.by/promocrux?action=delitTDBkeyColumn&delitTDBkeyColumn=SECRET_ID,TABLE_NAME,ColumnName" target='_blank'>url?action=delitTDBkeyColumn&delitTDBkeyColumn=SECRET_ID,TABLE_NAME,ColumnName</a></p><h3> Delete Single Data from Table🗑️</h3>
                <span>Endpoint: /delitSingleTDBData🫠</span>
                <p>Use this endpoint to delete a single row of data from a table based on a specific column value.</p>
                <span>Parameters:</span>
                <p>delitSingleTDBData: Comma-separated string containing Google Sheets document ID, table name, column name, and the value to search for.</p>
                <p>Example: <a href="https://goo.by/promocrux?action=delitSingleTDBData&delitSingleTDBData=SECRET_ID,TABLE_NAME,ColumnName,SearchValue" target='_blank'>url?action=delitSingleTDBData&delitSingleTDBData=SECRET_ID,TABLE_NAME,ColumnName,SearchValue</a></p>
                <h3> Response Format</h3>
                <p>All responses are in JSON format and will have the following structure:</p>
                <p>For successful operations: &#123;"data": "Response message..." &#125;🤗</p>
                <p>For errors: &#123;"error": "Error message..." &#125;🫢</p>
                <p>Conclusion</p>
                <p>You now have access to the Table Database API and can start managing your tables and data with ease. If you have any questions or need further assistance, please don't hesitate to contact our support team.</p><br />
                <h4>Happy data managing!</h4><br />
                <h1>🫡🚀🫡🚀🫡🚀🫡</h1>
            </div>
        </div>
    )
}

export default Reference
