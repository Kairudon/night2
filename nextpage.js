document.addEventListener('DOMContentLoaded', (event) => {
    const toggleReportBtn = document.getElementById('toggle-report-btn');
    const analysisReport = document.getElementById('analysis-report');

    toggleReportBtn.addEventListener('click', () => {
        if (analysisReport.style.display === 'none' || analysisReport.style.display === '') {
            analysisReport.style.display = 'block';
            toggleReportBtn.textContent = 'コメントを隠す';
        } else {
            analysisReport.style.display = 'none';
            toggleReportBtn.textContent = 'コメントを見る';
        }
    });
});
