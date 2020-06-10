
# Story Map of the 14 Biggest Protests in US History

## Project description

> Protests have been happening multiple times through out American history as a way for the people to show their outrage and feelings against hate, inequality, and violence. And most of the protests have led to positive changes in the laws and in the behavior of people. As people residing in this country, we cannot forget that major changes have developed due to protests. An example is the Civil Rights Bills that was passed as the effect of a protest. Protests are the foundation that built America, that should never be forgotten. It is important to be educated about certain protests that brought thousands, and even millions, of people together. Those protests show the unity Americans hold in their hearts.

## Project goal 

> Tha goal of this project is to get educated about the 14 biggest protests in US History. It is important to read and understand these protests and overall, how protests help America and those who live in this coutnry reach equality and unity. The goal of this story map is to also show where we have started (57 years ago) and where we are now. Which is basically the same place, unfortunately. 

> This story map was made as a way to educate people on the protests that have happened, and where they took place and how the spread.

> It is also interesting to see that most of the popular protests (and essentially human rights protests) have been happening during the Trump administration. Coincidence? That is up to everyone to think about.

> The 14th protest that has been mentioned is the only protest out of them all that had all 50 states involved. Which is incredible. But what is also interesting is that, the first protest mentioned here (the Civil Rights March) and the last protest (Black Lives Matter March) are about the same thing. This shows that in the last 57 years, barely nothing has changed. But while looking at the two maps, we can also see that back then the march happened only in Washington DC. Now, the protests and marches are happening all over the Nation. Which is a good place to start. This could be because of the increase in awareness, the access to more information, a decrease in the digital divide, or simply more unity. Whatever the reason may be, improvement and changes are happening all over the Nation and the World.

## Data sources

Topic | Data Source
----- | -----------
14 biggest march data | https://www.businessinsider.com/largest-marches-us-history-2017-1
1963 Civil Rights March | https://kinginstitute.stanford.edu/encyclopedia/march-washington-jobs-and-freedom | https://www.britannica.com/event/March-on-Washington
Anti Vietnam War Protest | https://www.history.com/topics/vietnam-war/vietnam-war-protests | https://learning.blogs.nytimes.com/2011/11/15/nov-15-1969-anti-vietnam-war-demonstration-held/
The Solidarity Day March | https://www.peoplesworld.org/article/today-in-labor-history-huge-solidarity-day-march-in-washington/
The Anti-Nuclear March | https://wagingnonviolence.org/2009/06/remembering-the-1982-rally-against-nuclear-arms/
The Million Man March | https://en.wikipedia.org/wiki/Million_Man_March
LGBTQ Rights March | https://en.wikipedia.org/wiki/March_on_Washington_for_Lesbian,_Gay_and_Bi_Equal_Rights_and_Liberation
Million Woman March | https://www.blackpast.org/african-american-history/million-woman-march-1997/
Iraq War Protest | https://www.huffpost.com/entry/what-happened-to-the-antiwar-movement_n_5a860940e4b00bc49f424ecb
March for Women's Lives | https://en.wikipedia.org/wiki/March_for_Women%27s_Lives_(2004)
The People's Climate March | https://www.npr.org/sections/thetwo-way/2017/04/29/526179637/thousands-of-marchers-expected-to-take-on-trumps-climate-policies
March for Science | https://www.livescience.com/58594-2017-march-for-science-guide.html
Women's March | https://www.nytimes.com/2017/01/21/us/womens-march.html
March for Our Lives | https://marchforourlives.com/
Black Lives Matter Protest | https://blacklivesmatter.com/

### Applied libraries and structures used in building the story map

This story map relies on AMD and Dojo loader [AMD](https://developers.arcgis.com/javascript/3/jshelp/inside_dojo_amd.html) for application structure.

The application is structured like this:

| Path                                    | Contains                                            |
| --------------------------------------------- |  -------------------------------------------------------------------------------------------- |
| Gruntfile.js                  | Build configuration                                     |
| src/                      | Main source code folder with index.html and the Eclipse project configuration             |
| src/app/                    | Javascript and CSS source code                                |
| src/app/config.js                     | App configuration file (loaded at execution time)                       |
| src/app/storymaps/common/           | Modules common across storymaps templates (main module is Core.js)              |
| src/app/storymaps/common/builder/       | Builder modules (main module is Builder.js)                         |
| src/app/storymaps/common/mapcontrols/     | Map UI components (Overview, Legend)                              |
| src/app/storymaps/common/ui/          | UI components                                         |
| src/app/storymaps/common/utils/       | Utils, connector,...                                      |
| src/app/storymaps/common/_resources     | Static resources                                        |
| src/app/storymaps/tpl/            | Map Journal modules (build configuration files in the root)                 |
| src/app/storymaps/tpl/builder/        | Builder modules (main module is BuilderView.js)                       |
| src/app/storymaps/tpl/core/         | Core modules (main module is MainView.js)                           |
| src/app/storymaps/tpl/ui/           | UI components of the viewer grouped by target device                      |
| src/lib-app/                  | Dependencies (included in the final app)                            |
| src/lib-build/                | Dependencies used by the build (not included in final app)                  |
| src/resources/                | Static resources                                        |


The application Javascript and CSS are minified into four files:

| File      |                   |
| --------------------- | ----------------------------------------------------------------------------- |
| app/viewer-min.css  | Compressed CSS loaded when accessing the Map Journal as a viewer    |
| app/viewer-min.js | Compressed Javascript loaded when accessing the Map Journal as a viewer |
| app/builder-min.css | Compressed CSS loaded when accessing the Map Journal as an author   |
| app/builder-min.js  | Compressed Javascript loaded when accessing the Map Journal as an author  |

The index.html will load the files in.

These are a list of the open-source libraries of this project and Esri StoryMaps. 

| Library               | License   |
| --------------------- | --------- |
| Bootstrap       | MIT     |
| CKEditor        | LGPL    |
| jQuery        | MIT     |
| jQuery Colorbox     | MIT     |
| iDangero.us swiper  | MIT     |
| History.js      | BSD     |
| jQuery UI       | MIT     |
| FastClick       | MIT     |
| Hammer.JS       | MIT     |
| jQuery mousewheel   | MIT     |
| jQuery UI Touch Punch | MIT     |
| Clipboard.js          | MIT       |


## Acknowledgement

> **ESRI ArcGIS Online StoryMaps**

> **All data sources listed above**

> **[Esri Github Account](https://github.com/Esri/storymap-journal/edit/master/README.md) for the information on the application infrastructure**
