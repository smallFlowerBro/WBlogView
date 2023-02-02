import {marked} from 'marked';
import hljs from 'highlight.js/lib/core'

let markerRender = new marked.Renderer();

// 自定义marker标记
// marked.use({extensions:[{
//     name :'ml',
//     level:"block",
//     start(src){
//         return src.match(/@@@/)?.index;
//      },
//     tokenizer(src, tokens) {
//         const rule = /^@{3}[^\0]*?@{3}/;    // Regex for the complete token, anchor to string start
//         const match = rule.exec(src);
//         if (match) {
//           const token = {                                 // Token to generate
//             type: 'ml',                      // Should match "name" above
//             raw: match[0],                                // Text to consume from the source
//             text: match[0].substring(3,match[0].length-3),                        // Additional custom properties
//             tokens: []                                    // Array where child inline tokens will be generated
//           };
//           this.lexer.blockTokens(token.text,token.tokens)
//           this.lexer.inline(token.text, token.tokens);    // Queue this data to be processed for inline tokens
//           return token;
//         }
//       },
//       renderer(token) {
//         return '<div class="ml">'+token.text+'\n</div>'; // parseInline to turn child tokens into HTML
//       }
// }]})

    
marked.setOptions({
      renderer: markerRender ,
      
      highlight: function(code, lang) {
          let language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, { language }).value;
      },
      langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartypants: false,
      xhtml: false
});
const toHtml = (str)=>{
    return marked(str)
} 
export default {toHtml};