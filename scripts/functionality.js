/* Qky 2020-2021 */

Vue.component("ping-message",
    {
        props:['message'],
        template:`<center>{{message}}</center>`
    }
)
var procStuff = new Vue({
    el: "div#processing-stuff",
    data: {
        loading:{
            message: "Pinging the Test Website (test.qky.life)",
            done: false
        }
    }
})

fetch("https://test.qky.life").then(function(a){
    console.log("This is should be out")
    if(!a.ok) {
        procStuff.loading.message = "Error while pinging my own web! Redirecting to my old website (project.qkie.xyz)";
        return setTimeout(function(){window.location.href = 'https://project.qkie.xyz'},3000)
    }
    procStuff.loading = {message:"Success! Redirecting you to my test website (test.qky.life)"}
    return setTimeout(function(){window.location.href = 'https://test.qky.life'},3000)
}).catch(function(e){
    procStuff.loading.message = "Error while pinging my own web! Redirecting to my old website (project.qkie.xyz)";
    return setTimeout(function(){window.location.href = 'https://project.qkie.xyz'},3000)
})
