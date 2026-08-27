```python
from http.server import BaseHTTPRequestHandler, HTTPServer
import subprocess
import os

# ============================================================
# CHANGE THIS ONLY IF YOUR RESUME FOLDER IS DIFFERENT
# ============================================================

RESUME_FOLDER = r"F:\Resume"

HOST = "127.0.0.1"
PORT = 8765


class ResumeHelper(BaseHTTPRequestHandler):

    def do_GET(self):

        if self.path == "/open-resumes":

            if not os.path.isdir(RESUME_FOLDER):

                self.send_response(404)
                self.send_header(
                    "Access-Control-Allow-Origin",
                    "*"
                )
                self.end_headers()

                self.wfile.write(
                    b"Resume folder not found."
                )

                return

            try:

                subprocess.Popen(
                    [
                        "explorer.exe",
                        os.path.normpath(RESUME_FOLDER)
                    ]
                )

                self.send_response(200)

                self.send_header(
                    "Access-Control-Allow-Origin",
                    "*"
                )

                self.send_header(
                    "Content-Type",
                    "text/plain; charset=utf-8"
                )

                self.end_headers()

                self.wfile.write(
                    b"Resume folder opened."
                )

            except Exception as error:

                self.send_response(500)

                self.send_header(
                    "Access-Control-Allow-Origin",
                    "*"
                )

                self.end_headers()

                self.wfile.write(
                    str(error).encode("utf-8")
                )

        else:

            self.send_response(404)

            self.send_header(
                "Access-Control-Allow-Origin",
                "*"
            )

            self.end_headers()

    def log_message(self, format, *args):
        pass


print()
print("==========================================")
print("       DEEPAK LODHI RESUME HELPER")
print("==========================================")
print()
print("Resume folder:")
print(RESUME_FOLDER)
print()
print("Server:")
print("http://127.0.0.1:8765")
print()
print("Keep this window open.")
print("==========================================")
print()


if not os.path.isdir(RESUME_FOLDER):

    print()
    print("WARNING: Resume folder was not found!")
    print()
    print("Check this path:")
    print(RESUME_FOLDER)
    print()


server = HTTPServer(
    (HOST, PORT),
    ResumeHelper
)

server.serve_forever()
```
