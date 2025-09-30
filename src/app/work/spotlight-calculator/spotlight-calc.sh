#!/bin/bash

# Spotlight-style calculator for Linux using rofi
# Usage: bind this script to a keyboard shortcut

# Get input from rofi
input=$(rofi -dmenu -p "Calculator" -theme-str 'window {width: 600px;} listview {enabled: false;}')

# Exit if no input
if [ -z "$input" ]; then
    exit 0
fi

# Try to calculate the result using bc
result=$(echo "$input" | bc -l 2>/dev/null)

# Check if calculation was successful
if [ $? -eq 0 ] && [ -n "$result" ]; then
    # Display result and copy to clipboard
    echo "$result" | xclip -selection clipboard
    rofi -dmenu -p "Result: $result" -theme-str 'window {width: 600px;} listview {enabled: false;}'
else
    # Show error
    echo "Invalid expression" | rofi -dmenu -p "Error" -theme-str 'window {width: 600px;} listview {enabled: false;}'
fi