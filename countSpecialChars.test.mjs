import {countSpecials, specials} from './countSpecialChars.mjs';

const isObjEquals = (a,b)=>
    Object.entries(a).sort().toString() === Object.entries(b).sort().toString()

{
    const actualCounts = countSpecials([]);
    let expectedCounts = {}
    Object.keys(specials).forEach(k=>expectedCounts[k]=0);

    console.log(
        'countSpecials result of empty array should return correct values', 
        isObjEquals(actualCounts, expectedCounts)
    )
}

{
    const testArray = [
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
    ]

    const expectedCounts = {
        comma: 0,
        dot: 19,
        colon: 0,
        semicolon: 14,
        singleQuote: 0,
        doubleQuote: 8,
        backQuote: 0,
        openingBracket: 14,
        closingBracket: 14,
        openingBraces: 5,
        closingBraces: 5,
        openingSquareBracket: 1,
        closingSquareBracket: 1,
        lessThanSign: 0,
        greaterThanSign: 0,
        minus: 0,
        plus: 2,
        multiply: 1,
        equalSign: 7,
        and: 0,
        pipe: 0,
        exclamationMark: 0,
        questionMark: 1,
        slash: 16,
        backSlash: 0,
        atSign: 0,
        octotorp: 0,
        dollarSign: 0,
        percentSign: 0,
        hatSign: 0,
        tildas: 0,
        underscore: 0
    }
    let actualCounts = countSpecials(testArray)

    console.log(
        'countSpecials result of testArray should return correct values', 
        isObjEquals(actualCounts, expectedCounts)
    )
}