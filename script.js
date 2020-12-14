var photos=[
"https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",

"https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",

"https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2214&q=80",
];

photos.forEach(function(a,b){
   $(".img").append("<img src=" + photos[b] + ">");            
});

var image = ["https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"];

photos.push(image);

$('.img').empty();

photos.forEach(function(a,b){
   $(".img").append("<img src=" + photos[b] + ">");            
});

$(".button").click(function(){
    var pictures = $(".inputName").val();

 $(".img").append("<img src=" + pictures + ">");

console.log(pictures);
$(".inputName").val("");
});