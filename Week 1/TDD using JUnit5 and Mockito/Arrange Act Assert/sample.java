import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class AAAFixtureTest {

    private int number;

    // Setup Method
    @Before
    public void setUp() {
        number = 10;
        System.out.println("Setup executed");
    }

    // Test using Arrange-Act-Assert Pattern
    @Test
    public void testAddition() {

        // Arrange
        int value = number;

        // Act
        int result = value + 5;

        // Assert
        assertEquals(15, result);
    }

    // Teardown Method
    @After
    public void tearDown() {
        System.out.println("Teardown executed");
    }
}
