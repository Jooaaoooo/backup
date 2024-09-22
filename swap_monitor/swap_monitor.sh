#!/bin/bash

# Define the swap usage threshold (in percentage)
THRESHOLD=90

while true; do
    # Get the total and used swap values
    SWAP_TOTAL=$(grep SwapTotal /proc/meminfo | awk '{print $2}')
    SWAP_FREE=$(grep SwapFree /proc/meminfo | awk '{print $2}')
    SWAP_USED=$((SWAP_TOTAL - SWAP_FREE))

    # Calculate the swap usage percentage
    if [ "$SWAP_TOTAL" -ne 0 ]; then
        SWAP_PERCENT=$(( (SWAP_USED * 100) / SWAP_TOTAL ))
    else
        SWAP_PERCENT=0
    fi

    # Check if swap usage exceeds the threshold
    if [ "$SWAP_PERCENT" -ge "$THRESHOLD" ]; then
        # Send a desktop notification
        notify-send -u critical "Swap Usage Alert" "Swap usage is at ${SWAP_PERCENT}%!"
    fi

    # Wait for a defined interval before checking again (e.g., 60 seconds)
    sleep 90
done
