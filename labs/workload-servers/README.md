# Enhancing Performance

Benchmarked CLI using Artillery [Documentation](https://artillery.io/docs/cli-reference/)

Usage via CLI: `artillery quick -d 10 -r 50 -k http://localhost:3000`

```log
-d, --duration <seconds>     Set duration (in seconds)
-r, --rate <number>          Set arrival rate (per second)
-p, --payload <string>       Set payload (POST request body)
-t, --content-type <string>  Set content-type
-o, --output <string>        Set output filename
-k, --insecure               Turn off TLS certificate verification
-q, --quiet                  Turn on quiet mode
```

Outputs:

```log
Summary report @ 23:36:34(-0300) 2019-07-08
  Scenarios launched:  500
  Scenarios completed: 500
  Requests completed:  500
  RPS sent: 47.8
  Request latency:
    min: 1
    max: 14.7
    median: 1.4
    p95: 2.1
    p99: 3.9
  Scenario counts:
    0: 500 (100%)
  Codes:
    200: 500
```
