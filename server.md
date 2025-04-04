import http.server
import socketserver

# Define the port you want the server to run on
PORT = 8000

# Set up the server to serve files from the current directory
Handler = http.server.SimpleHTTPRequestHandler

# Create the server
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    # Start the server and keep it running
    httpd.serve_forever()