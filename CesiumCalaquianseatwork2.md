# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
[4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
[CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
### Step 1 (Static vs Relative):

Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

In default static positioning, elements are placed according to normal document flow and ignore the top, left, right, and bottom properties. Relative positioning, however, does not ignore these properties, allowing them to be repositioned relative to its original position.

### Step 2 (Fixed):

Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

When you scroll, the footer maintains its positioning at the bottom of the page, and remains visible all throughout.
### Step 3 (Absolute):

Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

Absolute positioning places an element relative to its nearest positioned ancestor, while fixed positioning pins an element relative to the viewport, keeping it visible during scrolling.

### Step 4 : (Absolute)

Add in html ```<div class="notice">Notice!</div>``` and include the css below:

css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}

Give .content a z-index: 1.

Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

The notice appears on top of the context because its z-index value is higher. If you swap the z-index values, the content with the higher z-index will appear on top.

Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    * What do you observe on about the effect of z-index on .notice and .content boxes?

* HTML:
<div class="content">
  Main Content
  <div class="notice">Notice!</div>
</div>

* CSS:
.content {
  position: relative;
  width: 300px;
  height: 200px;
  background: lightyellow;
}

.notice {
  position: absolute;
  top: 0;
  right: 0;
  background: orange;
  padding: 10px;
  z-index: 2;
}

* Observations
When .content is relative, .notice stays inside the content box and is positioned at the top-right corner. This is because .content becomes the reference for the absolute element.

When .content is fixed, it stays in one place of the screen even while scrolling. The .notice also moves with it since it's inside the content box.

For observations on z-index, the element with the higher z-index value will appear on top. Since .notice has a higher z-index value than .content, it appears above it. If the z-index values are swapped, .content will cover the .notice. Z-index only works on elements that have a position (relative, absolute, or fixed).

3. Please answer the following reflection questions (15 minutes)

 a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)?

- **Static**: Default positioning for all HTML elements; follows the normal document flow.  
- **Relative**: Remains in the normal flow, but can be moved relative to its original position.  
- **Absolute**: Positioned relative to its nearest positioned ancestor; removed from normal flow.  
- **Fixed**: Removed from normal flow and anchored to the viewport (stays in place when scrolling).  


 b. How does absolute positioning depend on its parent element?

An absolutely positioned element is positioned relative to its nearest ancestor that has a position value other than `static`.


c. How do you differentiate sticky from fixed?

A **sticky** element is initially in the normal flow, then becomes fixed when a certain scroll position is reached.  
A **fixed** element is always anchored to the viewport and does not move when scrolling.


 d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

I can use:

- **Fixed** for a navigation bar so it stays visible while scrolling  
- **Absolute** to place badges like "NEW" or "IMPORTANT" on announcements  
- **Relative** to slightly adjust layout elements  
- **z-index** to make pop-ups or notices appear above other content  