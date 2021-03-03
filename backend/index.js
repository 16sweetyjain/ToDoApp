const {start} =require('./server');

start({                                                              // helper function for setting up express server
    port:8000,
    callback:()=> console.log('listening on port'+8000)
});