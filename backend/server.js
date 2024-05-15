
const express =require('express');
const cors=require('cors');



const app=express();
const port=5000;


app.use(cors());
app.use(express.json());

console.log
const problems=[
    {id:1,title:'붕대감기',description:'구현 이고 레벨1 입니다',link:'https://school.programmers.co.kr/learn/courses/30/lessons/250137'},
    {id:2,title:'저자 별 카테고리 별 매출액 집계하기'
    ,description:'sql문제 ',link:'https://school.programmers.co.kr/learn/courses/30/lessons/144856'},
];

app.get('/api/problems',(req,res)=>{
    res.json(problems);
});

app.listen(port,()=>{
    console.log('서버가 잘 작동하네요!');
})