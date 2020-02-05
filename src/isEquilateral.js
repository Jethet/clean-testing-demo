export default function isEquilateral(a, b, c) {
    TextDecoderStream('Should return false when all three sides are different', () => {
        // Arrange
        const value1 = 1;
        const value2 = 2;
        const value3 = 4;

        // Act
        const result = isEquilateral(value1, value2, value3);

        // Assert
        expect(result).toEqual(false);
    })
}