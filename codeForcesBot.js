let input = document.getElementById("input");
let userarea= document.getElementById('user-area');
let chatbotarea = document.getElementById('chatbot-area');

function greet(){
    var today=new Date()
    var hours=today.getHours()
    var grt = [
        "Hi there,",
        "Hello, ",
        "Hi, ",
    ]
    var item=grt[Math.floor(Math.random()*grt.length)]
    if(hours>18){
        item+=" It's a bit late but don't worry I've got you covered."
    }
    else if(hours>11){
        item+=" A very Good Afternoon. Have a delightful day"
    }
    else{
        item+=" Good morning! Today is yours to conquere."
    }
    var x=document.createElement('div')
    x.innerHTML=item
    chatbotarea.appendChild(x)
    var y=document.createElement('div')
    y.innerHTML=" I am your CodeForces bot.I can help you in finding Programs of your interest.Hope you enjoy Coding :-)"
    chatbotarea.appendChild(y)
}


function problems(tag){
    var url='https://codeforces.com/api/problemset.problems?tags=';
    url+=tag
    fetch(url)
            .then(function (response) {
               return (response.json());
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                alert('Please enter a valid tag');
            });
        function appendData(data) {
            var output=document.createElement('div');
            for(var i=0;i<10;i++){
                var ref="https://codeforces.com/problemset/problem/"
                var bit=document.createElement('div')
                bit.innerHTML=(data).result.problems[i].name;
                var contestId=(data).result.problems[i].contestId;
                var index=(data).result.problems[i].index;
                var prob=ref+contestId+'/'+index
                var res=document.createElement('a')
                var link=document.createTextNode(bit.innerHTML)
                res.appendChild(link)
                res.href=prob
                output.appendChild(res)
                output.appendChild(document.createElement('div'))
            }
            chatbotarea.appendChild(output)
        }
}

greet()
var msgno=0
var index=1
function main(event){
    if(event.key=='Enter'){
        var inp=document.createElement('div')
        inp.appendChild(input)
        userarea.appendChild(inp)
        problems(input.value)
        msgno+=10
        index+=1
        console.log(msgno)
    }
}