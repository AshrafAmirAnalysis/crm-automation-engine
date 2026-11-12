/**
 * @fileoverview Utility to convert localized extension data into a downloadable CSV blob.
 * Demonstrates ETL concepts within a browser environment.
 */

const exportDataToCSV = (dataArray, filename = 'daily_productivity_export.csv') => {
    if (!dataArray || !dataArray.length) {
        console.warn("No data available to export.");
        return;
    }

    // Extract headers dynamically from the first object
    const headers = Object.keys(dataArray[0]).join(',');
    
    // Map rows handling potential commas in the data
    const rows = dataArray.map(obj => 
        Object.values(obj).map(value => `"${value}"`).join(',')
    ).join('\n');

    const csvContent = `${headers}\n${rows}`;
    
    // Create a Blob and trigger a local download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
