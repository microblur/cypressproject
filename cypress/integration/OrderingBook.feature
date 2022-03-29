Feature: Ordering book 
  Scenario: wholesale order book
    Given The user launch chrome broswer with "https://react.simprocloud.com/build/index.html"
    When The user select category as "Fiction"
    And The user select "Harry Potter" from the dropdown list
    And The user enters the units as "50"
    And The user enters the price as "35.80"
    And The user click the submit button
    Then The transaction record will be generated
  Scenario: book-lover order book
    Given The user launch chrome broswer with "https://react.simprocloud.com/build/index.html"
    When The user select category as "Drama"
    And The user select "The Rainbow" from the dropdown list
    And The user enters the units as "1"
    And The user enters the price as "125"
    And The user select discount checkbox
    And The user enters "10" in discount 
    And The user click the submit button
    Then The transaction record will be generated
    Then The user delete the transaction record
    Then The user confirm to delete the record