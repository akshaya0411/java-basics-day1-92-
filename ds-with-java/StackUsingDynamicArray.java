
package stackusingdynamicarray;
 class Dstack {
    public Dstack(int length) {
    }
    public boolean push(int item) {
        resizeIfRequired();
    }
    int pop() {
    }
    private void resizeIfRequired() {
        if (items.length == count) {
            int[] newItems = new int[count * 2];
            for (int i = 0; i < count; i++) {
                newItems[i] = items[i];
            }
            items = newItems;
        }
    }
    public void print() {
        for (int i = 0; i < count; i++) {
            System.out.println(items[i]);
        }
    }
 }
 public class StackUsingDynamicArray {
    public static void main(String[] args) {
    
    }
    
}
