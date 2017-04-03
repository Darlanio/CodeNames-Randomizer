// <script type="text/javascript">

function ShowKey(key, tomove)
{
    for(i=1;i<26;i++) {
        block=document.getElementById(i);
        if(block!=null) {
            if(key[i-1]==1) {
                block.style.backgroundColor="#0000FF";
                block.Status="Blue";
            }
            if(key[i-1]==2) {
                block.style.backgroundColor="#FF0000";
                block.Status="Red";
            }
            if(key[i-1]==3) {
                block.style.backgroundColor="#777777";
                block.Status="Grey";
            }
            if(key[i-1]==4) {
                block.style.backgroundColor="#000000";
                block.Status="Black";
            }
        }
    }
    block0=document.getElementById(0);
    block26=document.getElementById(26);
    if(block0!=null && block26!=null) {
        if(tomove==1) {
            block0.style.backgroundColor="#3333FF";
            block26.style.backgroundColor="#3333FF";
        }
        if(tomove==0) {
            block0.style.backgroundColor="#FF3333";
            block26.style.backgroundColor="#FF3333";
        }
    }
}

// http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function Shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function Randomize()
{
    key = [ '1','1','1','1','1','1','1','1','1','2','2','2','2','2','2','2','2','3','3','3','3','3','3','3','4' ];
    tomove=Math.floor(Math.random() * 2);
    if(tomove==0) key[1]='2';
    Shuffle(key);
    ShowKey(key,tomove);
}