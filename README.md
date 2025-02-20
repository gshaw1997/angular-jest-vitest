# Angular Jest vs Vitest Benchmark

This repository serves as a benchmark comparison between Jest and Vitest testing frameworks in an Angular 19 application. The goal is to evaluate the performance characteristics of both testing frameworks to make informed decisions about test runner selection in larger Angular applications.

## Purpose

- Compare the performance of Jest and Vitest in an Angular environment
- Measure execution times and resource utilization
- Provide data for decision-making in larger Angular applications
- Explore the feasibility of migrating from Jest to Vitest

## Setup

1. Clone the repository:
```bash
git clone [repository-url]
cd angular-jest-vite
```

2. Install dependencies:
```bash
npm install
```

## Running Tests

### Individual Test Runners

Run Jest tests:
```bash
npm run test:jest
```

Run Vitest tests:
```bash
npm run test:vitest
```

### Benchmarks

To run the benchmark comparison:
```bash
./benchmark.sh
```

This will execute 5 runs of both Jest and Vitest test suites and output timing information.

## Benchmark Results

Current benchmark results from a MacOS environment (darwin 24.0.0):

### Jest Results (Averages across 5 runs)
- Test execution time: ~2.733s
- Real time: ~3.547s
- User CPU time: ~9.875s
- System CPU time: ~1.093s

### Vitest Results (Averages across 5 runs)
- Test execution time: ~0.818s
- Real time: ~2.349s
- User CPU time: ~4.166s
- System CPU time: ~0.585s

### Key Findings
- Vitest showed approximately 3.3x faster test execution
- Real-time execution was about 33% faster with Vitest
- CPU usage was 2.4x more efficient with Vitest
- Both runners showed consistent performance across runs

## Current Limitations

The current benchmark has several limitations to consider:

1. **Test Suite Size**
   - Only 2 components tested
   - 7 total tests
   - Simple component logic
   - No complex Angular features

2. **Environment**
   - Results from local MacOS environment
   - May differ in CI/Docker environments
   - Limited resource constraints

3. **Coverage**
   - No complex DOM manipulations
   - No HTTP interactions
   - No state management testing
   - Limited Angular feature usage

## Future Considerations

Before making decisions for larger applications, consider:

1. **Extended Testing Needed**
   - Test with larger, more complex codebases
   - Evaluate in Docker/CI environments
   - Monitor memory usage
   - Test with code coverage enabled

2. **Migration Strategy**
   - Consider gradual migration approach
   - Evaluate maintenance overhead
   - Assess team training needs
   - Review ecosystem compatibility

3. **CI Integration**
   - Validate performance in CI pipelines
   - Test reporting integration
   - Parallel execution capabilities
   - Resource constraints in CI
