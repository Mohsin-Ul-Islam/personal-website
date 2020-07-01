const path = require('path');

function downloadResume(req,res) {
    return res.download('./public/downloads/resume.pdf');
}
module.exports = {downloadResume};