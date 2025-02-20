#!/bin/bash

echo "Running Jest and Vitest Benchmark Tests"
echo "======================================="
echo

# Number of iterations
iterations=5

echo "Running Jest Benchmarks..."
echo "-------------------------"
for i in $(seq 1 $iterations); do
    echo "Jest Run #$i:"
    time npm run test:jest -- --no-cache
    echo
done

echo
echo "Running Vitest Benchmarks..."
echo "---------------------------"
for i in $(seq 1 $iterations); do
    echo "Vitest Run #$i:"
    time npm run test:vitest -- --no-cache --run
    echo
done
