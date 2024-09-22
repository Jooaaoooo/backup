#!/bin/bash

# Function to display a notification and wait for the user to close it
notify_reset() {
    notify-send -u critical -t 0 "Timer Notification" "Reset the timer"
    while pgrep -x "notify-osd" > /dev/null || pgrep -x "xfce4-notifyd" > /dev/null; do
        sleep 1
    done
}

# Function to generate and run a cycle of timers
run_cycle() {
    local min_time=$1
    local max_time=$2
    local timer_cycles=$3

    echo "Starting a new cycle with $timer_cycles timers and durations between $min_time and $max_time minutes."

    for (( i=1; i<=timer_cycles; i++ ))
    do
        # Generate a random time in minutes within the specified range
        random_time=$((RANDOM % (max_time - min_time + 1) + min_time))

        # Convert to seconds for sleep
        sleep_time=$((random_time * 60))

        echo "Timer $i: $random_time minutes ($sleep_time seconds)"

        # Countdown timer in the terminal
        while [ $sleep_time -gt 0 ]; do
            echo -ne "Timer $i: $((sleep_time / 60)) minutes and $((sleep_time % 60)) seconds remaining...\r"
            sleep 1
            sleep_time=$((sleep_time - 1))
        done

        echo -e "\nTimer $i completed."

        # Display notification and wait for user to acknowledge
        notify_reset
    done
}

# Main loop to alternate between cycles
while true; do
    # Generate a random number of timers (between 5 and 15) for the first cycle
    timer_count1=$((RANDOM % 11 + 5))  # 5 to 15 timers
    run_cycle 5 15 $timer_count1  # Timers with durations between 5 and 15 minutes

    # Generate a random number of timers (between 5 and 15) for the second cycle
    timer_count2=$((RANDOM % 11 + 5))  # 5 to 15 timers
    run_cycle 5 10 $timer_count2  # Timers with durations between 5 and 10 minutes

    echo "Restarting the cycle..."
done
