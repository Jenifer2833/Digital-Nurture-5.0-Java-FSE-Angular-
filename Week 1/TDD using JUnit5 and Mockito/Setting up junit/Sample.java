import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    @Test
    public void testAddition() {
        int result = 10 + 20;
        assertEquals(30, result);
    }

    @Test
    public void testSubtraction() {
        int result = 20 - 10;
        assertEquals(10, result);
    }

    @Test
    public void testMultiplication() {
        int result = 5 * 4;
        assertEquals(20, result);
    }

    @Test
    public void testDivision() {
        int result = 20 / 4;
        assertEquals(5, result);
    }
}
