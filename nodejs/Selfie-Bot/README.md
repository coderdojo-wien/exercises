# Selfie-Bot
Dieser Bot wurde 
<p align="center">
  <img src="images/screen.gif">
</p>

## Los geht's!

### 1) Prerequisites
Make sure you have the latest version of Visual Studio installed, you can download the latest version for free [here](https://www.visualstudio.com/en/downloads).

Choose at least the ASP.NET and the NodeJS workload.<br/>

![](images/setup.png)

Next, go to the [node.js download page](https://nodejs.org/en/download/) and download & install node. 

### 2) Set up application
Download or clone this repository
```
git clone https://github.com/christian-vorhemus/DashboardTemplate.git
```
Open a console/terminal and switch to the DashboardTemplate directory (this is the directory where app, bin, package.json, etc. is located). Type
```
npm install
```
to install the necessary node packages. This may take a while.

### 3) Get INQStats key and add it to the project
INQStats is used to retrieve demographic data. Go to the [INQStats API page](http://blog.inqubu.com/inqstats-open-api-published-to-get-demographic-data), enter your name, eMail and a short description and press send - you'll receive an API key.
Doubleclick on DashboardTemplate.sln to open the solution. Navigate to app/mainPage/app.service.ts and find the line
```typescript
apiKey: string = "<ADD YOUR INQSTATS KEY HERE>";
```
Paste your INQStats API key here.
In Visual Studio, press F5 to start a local webserver, you should now see the application running in a browser.

## Troubleshooting

If the app gets stuck at the "Loading app" screen, open the browser console (F12) and check for errors. If you see a "ZoneAwareError" saying that d3/index.js cannot be found, delete your browser cache and try again.

If you see the template with empty charts, make sure your INQStats key is set and valid.