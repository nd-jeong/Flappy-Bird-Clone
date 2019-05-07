# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Monday| Wireframes / Priority Matrix / Functional Components | Complete
|Tuesday| Core Application Structure (HTML, CSS, etc.), Psuedocode, Start JS | Incomplete
|Wednesday| JS MVP | Incomplete
|Thusday| JS MVP / Full Working JS  | Incomplete
|Friday| Present | Incomplete

## Project Description

This game will be a Flappy Bird clone. The playable character will constantly be falling due to "gravity". The player can increase the height of the bird by pressing a key. The "game board" will constantly be scrolling to the right. As the board is scrolling, there will be walls or pillars with a gap in the middle. The player must guide the bird through the gaps to continue the game. If the player runs into the wall or the ground, the game will end. The game will keep track of the number of obstacles passed through as the score.

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

- [TTT-Wireframe1-Board-Layout](https://drive.google.com/file/d/0B0NV6orplgTfNE93cDI0cVdXVlNvRm5oX3FlcFJhYjMyLUJZ/view?usp=sharing)

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

- [TTT-Priority-Matrix](https://drive.google.com/file/d/0B0NV6orplgTfdGhQZGlTOXBVNnNnNEF2VV9LWXpXakJCejhZ/view?usp=sharing)

#### MVP 
- Create the game board
- Create playable character
- Create "gravity"
- Create player movement based on key press
- Create "walls"
- Make sure the game board scrolls to the right

#### PostMVP 
- Game reset
- Score keeping
- Randomly generated "walls"
- Increase scrolling speed over time
- Insert sprites
- Insert sound effects

## Functional Components

Based on the initial logic defined in the previous  phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

### Landing Page

### Game Initialization
  - create game board
  - create playable character
  - create obstacles

### Playing The Game
  - player "gravity"
  - board scrolling
  - add additional obstacles
  - increase playable character's height with keypress
  - keep track of obstacles cleared

### Losing The Game
  - if player's character runs into an obstacle
  - if player's character hits the ground

### Resetting The Game

### Additional
  - add sprites
  - add sound effects

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Wireframes | H | 3hrs| 0hrs | 0.5hrs |
| Project Worksheet | M | 1hrs| 0hrs | 0.5hrs |
| Game Init | H | 3hrs| 0hrs | 1.5hrs |
| Player Gravity | H | 3hrs| 0hrs | 0.5hrs |
| Board Scrolling | H | 5hrs| 0hrs | 1hrs |
| Player Height Increase | H | 2hrs| 0hrs | 1hrs |
| Obstacle Collision Detection | H | 4hrs|  0hrs  |  0hrs  |
| Ground Collision Detection | H | 4hrs|  0hrs |  0hrs |
| Randomly Generated Obstacles | M/H | 4hrs|  0hrs |  1hrs |
| Increase Scrolling Speed Over Time | M/H | 2hrs|  0hrs |  0hrs |
| Score Keeping | L | 2hrs|  0hrs  | 0hrs  |
| Insert Sprites| L | 1hrs|  0hrs  |  0hrs  |
| Game Reset| L | 1hrs|  0hrs  |  0hrs  |
| Sound Effects| L | 1hrs|  0hrs  |  0hrs  |
| Total | H | 38hrs| 0hrs | 6hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 - HTML Canvas

## Code Snippet

**Note**: In [HTML5 ID's can be numbers](https://benfrain.com/when-and-where-you-can-use-numbers-in-id-and-class-names/)

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
