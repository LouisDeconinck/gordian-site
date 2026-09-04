# Gordian website

A dependency-free static website for `gordian.be`.

## Preview locally

```sh
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

## Deploy

Upload the repository contents to any static host and point `gordian.be` to it. The site has no build step.

Before publishing, make sure `security@gordian.be` exists and can receive mail.
