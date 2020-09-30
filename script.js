var ogImg=null;
var Output;
var canvas;
function upload()
{
  var fileinput= document.getElementById("up");
 canvas = document.getElementById("c");
  ogImg= new SimpleImage(fileinput);
  ogImg.drawTo(canvas);
}
function greys()
{
  if(ogImg == null || !ogImg.complete())
    {
      alert("Image not loaded.");
      return;
    }
  Output=new SimpleImage(ogImg);
  for(var pixel of Output.values())
    {
      var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
      pixel.setRed(avg);
      pixel.setBlue(avg);
      pixel.setGreen(avg);
    }
  Output.drawTo(canvas);
}
function red()
{
    if(ogImg == null || !ogImg.complete())
    {
      alert("Image not loaded.");
      return;
    }
  Output=new SimpleImage(ogImg);
  for(var pixel of Output.values())
    {
      var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
      if(avg<=128)
        {
          pixel.setRed(2*avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
        }
      else
        {
          pixel.setRed(255);
          pixel.setGreen(255-(2*avg));
          pixel.setBlue(255-(2*avg));
        }
    }
  Output.drawTo(canvas);
}
function rg()
{
    if(ogImg == null || !ogImg.complete())
    {
      alert("Image not loaded.");
      return;
    }
  Output=new SimpleImage(ogImg);
  for(var pixel of Output.values())
    {
     var ran = Math.round(Math.random());
      if(ran==0)
        {
           var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
      if(avg<=128)
        {
          pixel.setRed(2*avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
        }
      else
        {
          pixel.setRed(255);
          pixel.setGreen(255-(2*avg));
          pixel.setBlue(255-(2*avg));
        }
    }
      else
        {
          var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
      if(avg<=128)
        {
          pixel.setBlue(2*avg);
          pixel.setRed(0);
          pixel.setGreen(0);
        }
      else
        {
          pixel.setBlue(255);
          pixel.setRed(255-(2*avg));
          pixel.setGreen(255-(2*avg));
        }
        }
    }
  Output.drawTo(canvas);
}
     
function res()
{
  if(ogImg != null || ogImg.complete())
    {
      ogImg.drawTo(canvas);
      Output = ogImg;
      Output.drawTo(canvas);
    }
}