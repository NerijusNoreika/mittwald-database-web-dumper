let iframe = document.getElementById('right');
let iframeDocument = iframe.contentWindow.document
let databases  = iframe.contentWindow.document.querySelectorAll('div.coabfluid-table.table.zebra.selectable > table > tbody');
let databaseCount = databases[0].children.length;

if (databaseCount > 0) {
    do {
        var key = parseInt(prompt(`Found ${databaseCount} database(s). Which one you want?`));
        if (!key) break;
        if (key > databaseCount || key < 1) {
            alert('No such database.');
        }
    }
    while (key < 1 || key > databaseCount);
    if (key) {
        console.log(`Database ${key} will be selected...`);
                let row = databases[0].children;
                if (row) {
                    let data = row[key -1].children;
                    let db = data[1].textContent;
                    let description = data[2].querySelector('b').textContent;
                    let dbServer = data[5].textContent;
                    let user = db.split('_')[1];
                    alert(`Database name: ${description}. Code: mysql --default-character-set=binary -u${user} -p'' -h ${dbServer} ${db} < `);
                } else {
                    alert('Could not select the database');
                }
    } else {
        console.log('Operation was cancelled by user.');
    }
        
} else {
    alert('No database found.');
}