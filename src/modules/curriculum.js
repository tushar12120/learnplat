export const curriculum = {
    1: {
        title: "Level 1: Basic Structure",
        description: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
        sections: [
            {
                id: 'l1-1',
                title: "The Boilerplate",
                content: `
          <p>Every HTML document starts with a boilerplate. This structure tells the browser "I am a webpage".</p>
          <ul>
            <li><code>&lt;!DOCTYPE html&gt;</code>: Tells the browser this is HTML5.</li>
            <li><code>&lt;html&gt;</code>: The root element.</li>
            <li><code>&lt;head&gt;</code>: Contains meta-information (like title).</li>
            <li><code>&lt;body&gt;</code>: Contains the visible page content.</li>
          </ul>
        `,
                initialCode: `<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>This is my first paragraph.</p>
</body>
</html>`
            },
            {
                id: 'l1-2',
                title: "Tools Required",
                content: `
          <p>To write HTML, you need:</p>
          <ul>
            <li><strong>Laptop/Computer</strong></li>
            <li><strong>Code Editor</strong>: VS Code (Recommended) or UltraEdit.</li>
            <li><strong>Browser</strong>: Chrome, Firefox, or Edge to view your work.</li>
          </ul>
          <div class="alert">
            <strong>Pro Tip:</strong> Use the "Live Server" extension in VS Code to see changes instantly!
          </div>
        `,
                initialCode: `<!-- No code for this theory section, practice below! -->
<h1>I am ready to learn!</h1>
<p>I have my tools ready.</p>`
            }
        ]
    },
    2: {
        title: "Level 2: Tags & Attributes",
        description: "Learn the common tags used to format text and add attributes to elements.",
        sections: [
            {
                id: 'l2-1',
                title: "Text Formatting",
                content: `
          <p>HTML has many tags to format text:</p>
          <ul>
            <li><code>&lt;strong&gt;</code>: <strong>Bold text</strong></li>
            <li><code>&lt;em&gt;</code>: <em>Italic text</em></li>
            <li><code>&lt;u&gt;</code>: <u>Underlined text</u> (use sparingly)</li>
            <li><code>&lt;mark&gt;</code>: <mark>Highlighted text</mark></li>
          </ul>
        `,
                initialCode: `<p>This is <strong>important</strong> text.</p>
<p>This is <em>emphasized</em> text.</p>
<p>Do not forget to <mark>highlight</mark> key points.</p>`
            },
            {
                id: 'l2-2',
                title: "Attributes (Links & Images)",
                content: `
          <p>Attributes provide additional information about HTML elements.</p>
          <p>Common attributes:</p>
          <ul>
            <li><code>href</code>: Used in links (<code>&lt;a&gt;</code>).</li>
            <li><code>src</code>: Used in images (<code>&lt;img&gt;</code>).</li>
            <li><code>alt</code>: Text description for images.</li>
          </ul>
        `,
                initialCode: `<!-- Link -->
<a href="https://google.com" target="_blank">Go to Google</a>

<!-- Image -->
<br><br>
<img src="https://via.placeholder.com/150" alt="Placeholder Image" />`
            }
        ]
    },
    3: {
        title: "Level 3: Layouts & Semantics",
        description: "Use semantic tags to structure your page meaningfully.",
        sections: [
            {
                id: 'l3-1',
                title: "Semantic Elements",
                content: `
          <p>Semantic tags describe their meaning to both the browser and the developer.</p>
          <ul>
            <li><code>&lt;header&gt;</code>: Top section of page.</li>
            <li><code>&lt;nav&gt;</code>: Navigation links.</li>
            <li><code>&lt;main&gt;</code>: Dominant content.</li>
            <li><code>&lt;footer&gt;</code>: Bottom section.</li>
          </ul>
        `,
                initialCode: `<header>
  <h1>My Website</h1>
</header>
<nav>
  <a href="#">Home</a> | <a href="#">About</a>
</nav>
<main>
  <article>
    <h2>Article Title</h2>
    <p>This is a semantic article.</p>
  </article>
</main>
<footer>
  <p>&copy; 2026 ITI Student</p>
</footer>`
            }
        ]
    },
    4: {
        title: "Level 4: Advanced (Lists, Forms, Tables)",
        description: "Master complex structures like forms and data tables.",
        sections: [
            {
                id: 'l4-1',
                title: "Lists",
                content: `
          <p>Create organized lists of items.</p>
          <ul>
            <li><code>&lt;ul&gt;</code>: Unordered List (bullets)</li>
            <li><code>&lt;ol&gt;</code>: Ordered List (1, 2, 3)</li>
            <li><code>&lt;li&gt;</code>: List Item</li>
          </ul>
        `,
                initialCode: `<h3>Shopping List (Unordered)</h3>
<ul>
  <li>Milk</li>
  <li>Eggs</li>
  <li>Bread</li>
</ul>

<h3>Top 3 Movies (Ordered)</h3>
<ol>
  <li>The Matrix</li>
  <li>Inception</li>
  <li>Interstellar</li>
</ol>`
            },
            {
                id: 'l4-2',
                title: "Forms",
                content: `
          <p>Collect user input using forms.</p>
          <ul>
            <li><code>&lt;input&gt;</code>: Text, password, checkbox, etc.</li>
            <li><code>&lt;label&gt;</code>: Label for inputs.</li>
            <li><code>&lt;button&gt;</code>: Submit button.</li>
          </ul>
        `,
                initialCode: `<form>
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name"><br><br>
  
  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email"><br><br>
  
  <button type="button">Submit</button>
</form>`
            },
            {
                id: 'l4-3',
                title: "Tables",
                content: `
          <p>Display data in rows and columns.</p>
          <ul>
            <li><code>&lt;table&gt;</code>: The table container.</li>
            <li><code>&lt;tr&gt;</code>: Table Row.</li>
            <li><code>&lt;th&gt;</code>: Table Header.</li>
            <li><code>&lt;td&gt;</code>: Table Data.</li>
          </ul>
        `,
                initialCode: `<table border="1" style="width:100%">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Rahul</td>
    <td>21</td>
  </tr>
  <tr>
    <td>Priya</td>
    <td>22</td>
  </tr>
</table>`
            }
        ]
    }
};
