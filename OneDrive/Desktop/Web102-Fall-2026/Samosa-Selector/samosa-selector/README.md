# Lab2: Samosa Selector

## Overview: 
In this lab we're going to create a clicker game in which player click on a big image (samosa) to rack up samosas then spend them on upgrades that multiply every click. The main goal of this lab is to learn new react concept such as useState, hook, and events. 

## Step 1: Create the user interface
The first step consist of creating the user interface which contain a title, a count variable that increment the number of times a user click on the samosa and a big samosa image. 
<img width="879" height="547" alt="image" src="https://github.com/user-attachments/assets/034e817c-cc51-4853-ad83-6355aa9361e9" />

## Step 2: Add a counter
This step consists of creating a variable that keep track the number of times the samosa image has been clicked and display it.
<img width="870" height="484" alt="image" src="https://github.com/user-attachments/assets/97ef80c0-a246-4bae-a048-caf182038f18" />

## Step 3: Add upgrades
In this step we add three different cards on the user interface. These cards serve to upgrade the samosa count by multiplying every count. 
- Double Stuffed which increase the count by 2 per click when the total number of samosa is greater than or equal to 10.
- Party Park which increase the count by 5 per click when the total number of samosa is greater than or equal to 100.
- Full Feast which increase the count by 10 per click when the total number of samosa is greater than or equal to 1000.

<img width="929" height="692" alt="image" src="https://github.com/user-attachments/assets/783db037-ff53-40d9-89a7-7b30aae5e8fd" />

## Step 4: Handle upgrades
Next, we add event handlers to each upgrade button so that when a user has enough samosas, they can buy an upgrade and update the value of the multiplier state variable.


https://github.com/user-attachments/assets/4f3008e6-0f6d-47d1-997a-9c3c01970fad



# Stretch Features
## Step 5: Reduce samosa count after upgrade purchase
In this step each purchase handler is updated so the user loses samosas from their total count according to the upgrades they buy.

https://github.com/user-attachments/assets/6109173a-1a23-4930-804f-867569ad8b3d

## Step 6: Change size of samosa on hover and click
In the final step we improve the user interface by modifying the size of the big samosa. So, the size of the samosa increases when a user hover on it, and it shrink back to it normal size when on click. 


https://github.com/user-attachments/assets/96eb0438-3998-44ce-9a7b-2789e6592a77















