const specials = {
    comma: ',',
    dot: '.',
    colon: ':',
    semicolon: ';',
    singleQuote: '\'',
    doubleQuote: '"',
    backQuote: '`',
    openingBracket: '(',
    closingBracket: ')',
    openingBraces: '{',
    closingBraces: '}',
    openingSquareBracket: '[',
    closingSquareBracket: ']',
    lessThanSign: '<',
    greaterThanSign: '>',
    minus: '-',
    plus: '+',
    multiply: '*',
    equalSign: '=',
    and: '&',
    pipe: '|',
    exclamationMark: '!',
    questionMark: '?',
    slash: '/',
    backSlash: '\\',
    atSign: '@',
    octotorp: '#',
    dollarSign: '$',
    percentSign: '%',
    hatSign: '^',
    tildas: '~',
    underscore: '_'
}

const countSpecials = strArr => {
    let res = {}
    Object.keys(specials).forEach(k=>res[k]=0);

    for(let str of strArr) {
        for(let ch of str) {
            Object.entries(specials)
            .forEach(([k,v])=>{
                if(ch == v) res[k]++;
            })
        }
    }
    return res
}


countSpecials([
`import java.io.File;  // Import the File class

File myObj = new File("filename.txt")`,

`import java.io.*;  
public class FileDemo2 {  
    public static void main(String[] args) {  
  
        String path = "";  
        boolean bool = false;  
        try {  
            // createing  new files  
            File file  = new File("testFile1.txt");  
            file.createNewFile();  
            System.out.println(file);  
            // createing new canonical from file object  
            File file2 = file.getCanonicalFile();  
            // returns true if the file exists  
            System.out.println(file2);  
            bool = file2.exists();  
            // returns absolute pathname  
            path = file2.getAbsolutePath();  
            System.out.println(bool);  
            // if file exists  
            if (bool) {  
                // prints  
                System.out.print(path + " Exists? " + bool);  
            }  
        } catch (Exception e) {  
            // if any error occurs  
            e.printStackTrace();  
        }  
    }  
}`
])