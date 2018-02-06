Brain simulator 
=======

by Giuditta Pinotti, Serena Ripoli, Sara Sacchetto

## Project idea

We decided to focus on the structure of our brain as described by [Korbinian Broadmann](https://it.wikipedia.org/wiki/Korbinian_Brodmann), a famous German neurologist. 

A **Brodmann area** is a region of the cerebral cortex, in the human or other primate brain, defined by its histological structure and organization of cells. Each colour represents a different group of cells and its corresponding functions. We simplified the different areas and functions with the scheme below.




![Image](/brain/schema_cervello.png) 




The aim of the project is to show in a simple way something that we cannot usually see, i.e. how our brain works when we carry out our daily tasks. To show this, we used different type of device interactions (`rotationZ`, `DeviceShake`, etc) linked to specific brain functions. While you’re interacting with your mobile phone in different ways, you can see which part of your brain is doing the most work. 

## How it works

_N.B. The project was designed to work at its fullest extent on mobile devices._

When you open the sketch you will see a short introduction explaining how the project works.  Touch on “test your brain” and let your imagination run wild. Try and simulate every kind of interaction you can think about.
While you’re interacting with your mobile phone you will see the different areas coloured, and than by clicking on the burger menu at the top right, a legend appears showing the name of the functions corresponding to each area.



## Libraries used

To create our project we used [p5.js](https://p5js.org/), a JS client-side library based on Processing:
* p5.dom
* p5
* p5.sound

## Problems and how we solved them

Our biggest issue was making sure everything worked and fit on a mobile device. Some functions only worked on a particular phone and others weren’t consistent with their behaviour. 

For example, we had some problems with the language comprehension area and its corresponding function. The text box we needed to use wouldn’t work on mobile devices and/or randomly zoomed in. As a consequence, we replaced it with letters on screen you can interact with using the function `touch()`.

Another problem we had was about the webcam interaction; the idea was to turn off the “vision” brain area when all the webcam pixels were black. We solved the issue with this block of code:

```
video.loadPixels();
               //loadPixels();
                var y=0;
                var x=0;
                var index = (x+y*video.width)*4;
                var r=video.pixels[index+0]; 
                var g=video.pixels[index+1];
                var b=video.pixels[index+2];
                if (r<30 && g<30 && b<30){
                    var opacitywebcam=0;
                    image(imagePath,0,0,width,height);
                } else { opacitywebcam=250;}
```


Finally, we weren’t able to find a proper interaction for the association brain area. We thought about simulating it with the touch of two identical letters among the ones displayed on screen. Our main idea was using a `touches[i]` array and conditional statements but we couldn’t make it work. 


