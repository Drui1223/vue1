const data = require('./src/mock/mock.json');

module.exports = {
    devServer: {
        before: function(app){
            app.get('/api/list',(req, res)=>{
                res.send(data);
            })
        }
    }
}