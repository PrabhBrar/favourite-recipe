puts "What would you like to do?"
puts "-- Type 'add' to add two numbers."
puts "-- Type 'subtract' to subtract two numbers."
puts "-- Type 'multiply' to multiply two numbers."
puts "-- Type 'divide' to divide two numbers."

choice = gets.chomp.downcase

case choice
	when "add"
		puts "Enter the first number: "
		first_num = gets.chomp.to_f

		puts "Enter the second number: "
		second_num = gets.chomp.to_f
		
		result = first_num + second_num
		puts"Result: #{result}"
	when "subtract"
		puts "Enter the first number: "
		first_num = gets.chomp.to_f

		puts "Enter the second number: "
		second_num = gets.chomp.to_f
		
		result = first_num - second_num
		puts"Result: #{result}"
	when "multiply"
		puts "Enter the first number: "
		first_num = gets.chomp.to_f

		puts "Enter the second number: "
		second_num = gets.chomp.to_f
		
		result = first_num * second_num
		puts"Result: #{result}"
	when "divide"
		puts "Enter the first number: "
		first_num = gets.chomp.to_f

		puts "Enter the second number: "
		second_num = gets.chomp.to_f

		result = first_num / second_num
		puts"Result: #{result}"
	else
		puts "Sorry, I didn't understand you."
end