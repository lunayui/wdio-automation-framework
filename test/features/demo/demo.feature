Feature: Demo feature

 Feature Description

@demo
 Scenario Outline: run first demo feature

  Given Google page is opened
  When Search with <SearchTerm>
  And Click on the first link
  Then Url should contain <ExpectedUrl>


  Examples:
   | TestID     | SearchTerm | ExpectedUrl             |
   | DEMO_TC001 | WDIO       | "https://webdriver.io/" |

