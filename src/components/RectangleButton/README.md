# RectangleButtons Guide

## Notes
Sizes are fixed for each button, cannot be changed

## Syntax
#### <**ButtonName** text = "insert text" hover = "true/false" disabled ="true/false"\>
````
Text: Insert any text
Hover: Can be set to true or left blank depending if u want **hover animations**\
Colour: Do not use any colours outside of palette.
Disabled: Adds state to 50% opacity (note that hover has to be false)
````

## Div format
### Notes:
**w-full** takes up full width of page. **Change this if u want to format it differently else keep the rest the same**

### Small
```
<div className="h-8 w-full flex justify-center items-center">
    <SmallButton text = "" hover = "" />
</div>
```
### Medium
```
<div className="h-10 w-full flex justify-center items-center">
    <MediumButton text = "" hover = "" />
</div>
```
### Large
```
<div className="h-12 w-full flex justify-center items-center">
    <LargeButton text = "" hover = "" />
</div>
```
### Xlarge
```
<div className="h-14 w-full flex justify-center items-center">
    <XLargeButton text = "" hover = "" />
</div>
```






