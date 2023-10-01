import java.util.Arrays;

class Bubble_Sort{
    public static void main(String[] args) {
        int[] arr = {-15,-20,0,0,5,9,4,5,98,95,1000};
        bubbleSort(arr);
        System.out.println(Arrays.toString(arr));
    }
    static void bubbleSort(int[] nums){
        for (int i = 0; i < nums.length; i++) {
            for (int j = 1; j < nums.length; j++) {
                if(nums[j] < nums[j - 1]) {
                    int temp = nums[j];
                    nums[j] = nums[j - 1];
                    nums[j- 1] = temp;
                }
            }
        }
    }
}