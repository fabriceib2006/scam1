def simple_app():
    """A simple non-web application."""

    print("Welcome to the simple app!")

    while True:
        user_input = input("Enter a command (greet/exit): ").lower()

        if user_input == "greet":
            name = input("Enter your name: ")
            print(f"Hello, {name}!")
        elif user_input == "exit":
            print("Exiting the app. Goodbye!")
            break
        else:
            print("Invalid command. Please try again.")

if __name__ == "__main__":
    simple_app()