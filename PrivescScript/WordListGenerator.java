import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Random;
import java.util.Scanner;

public class WordListGenerator {
    public static void main(String[] args) throws IOException {
        Scanner in = new Scanner(System.in);

        //ask for word properties
        System.out.print("Enter the Minimum Length of word: ");
        int minLength = in.nextInt();
        System.out.print("Enter the Maximum Length of word: ");
        int maxLength = in.nextInt();

        in.nextLine();
        System.out.print("Include numbers (y/n): ");
        boolean includeNumbers = in.nextLine().equalsIgnoreCase("y");
        System.out.print("Include numbers (y/n): ");
        boolean includeAlphabets = in.nextLine().equalsIgnoreCase("y");
        System.out.print("Include numbers (y/n): ");
        boolean includeSpecialChars = in.nextLine().equalsIgnoreCase("y");
        in.close();

        String characterSet;
        characterSet = String.valueOf(characterSet(includeNumbers, includeAlphabets, includeSpecialChars));

        //create a file for storing wordlist
        createTextFile();

        System.out.println(characterSet.length());
        String word;

        for (int i=minLength;i<=maxLength;i++) {
            for (int j=i;j<i*characterSet.length();j++) {
                word = String.valueOf(generateWord(characterSet, i));
                insertWordInFile(word +"\n");
            }
        }
    }

    static StringBuilder characterSet(boolean includeNumbers, boolean includeAlphabets, boolean includeSpecialChars) {

        // Define the characters that can be included or not
        StringBuilder characterSet = new StringBuilder();
        if (includeNumbers)
            characterSet.append("0123456789");
        if (includeAlphabets)
            characterSet.append("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
        if (includeSpecialChars)
            characterSet.append("!@#$%^&*()_-+=<>,.?/|");
        return characterSet;
    }

    static void createTextFile() throws IOException {
        File file = new File("./Wordlist.txt");

        // Check if file exists then delete
        if (file.exists())
            file.delete();
        // Create a new file
        file.createNewFile();
    }

    static StringBuilder generateWord(String characterSet, int length){
        StringBuilder word = new StringBuilder();
        Random rand = new Random();

        for(int i=0; i<length;i++){
             word.append(characterSet.charAt(rand.nextInt(characterSet.length())));
        }
        return word;
    }

    static void insertWordInFile(String word) throws IOException{
        File textFile = new File("./Wordlist.txt");
        FileWriter appendWordList = new FileWriter(textFile, true);
        appendWordList.write(word);
        appendWordList.close();
    }

}