const data=[
    {
        imageURL:'',
        header:'Header 1',
        content:'Content 1'
    },
    {
        imageURL:'',
        header:'Header 2',
        content:'Content 2'
    },
    {
        imageURL:'',
        header:'Header 3',
        content:'Content 3'
    },
    {
        imageURL:'',
        header:'Header 4',
        content:'Content 4'
    },
    {
        imageURL:'',
        header:'Header 5',
        content:'Content 5'
    },
    {
        imageURL:'',
        header:'Header 6',
        content:'Content 6'
    },
    {
        imageURL:'',
        header:'Header 6',
        content:'Content 6'
    }
]

function getRamdomIndex(array){
    return Math.floor(Math.random()*array.lenght);
}

function ChangeBackgroundAndContent(){
    const randomData=data[getRamdomIndex(data)]
    const contentElement=document.getElementById('textPreview')
    const headerelement=document.getElementById('MoviesSection')
    document.body.style.backgroundImage=`url(${randomData.imageURL})`;
    
    headerelement.textContent=randomData.header;
    contentElement.innerHTML=randomData.content;

}
ChangeBackgroundAndContent();

setInterval(ChangeBackgroundAndContent,5000);