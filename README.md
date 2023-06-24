# Getting Started with Create React App



## Codes

### getByText - 

### render, screen

### describe

### if we add "coverage":"yarn test --coverage --watchAll" to scripts in jackage.json, we can see how much of the the lines, statements, functions, and etc. has been tested. 


### to find a single element on the Page, we have (getBy.., queryBy.., findBy..). Besides for multiple elements on the page (getAllBy.., queryAllBy.., findAllBy..). The are combined with - Role, LabelText, PlaceHolderText, Text, DisplayValue, AltText, Title, TestId. For example, getByLabelText.

### getByRole - combobox, checkbox, button, etc.

### getByLabelText - checks the text of the label element. We can use selector as an option to distinguish from other elements for example, if we have two same text, we can use selector as an input to distinguish it.

### getByPlaceholderText - checks the value of the placeholder in the element.


### getByText: Outside of forms, text content is the main way users find elements. This method can be used to find non-interactive elements (like divs, spans, and paragraphs).

### getByDisplayValue: Returns the input, textarea, or select element that has the matching display value.

### getByAltText: returns images alt text

### getByTitle: returns the title of the element