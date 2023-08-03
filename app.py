from flask import Flask, render_template, request, redirect, flash, session

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/generate", methods=["GET", "POST"])
def generate():
    if request.method == "POST":
        # Generate the maze
        return redirect("/")
    else:
        if request.args.get("level") == "1":
            # Easiest level
            return render_template("generate.html", level=1)
        elif request.args.get("level") == "2":
            # Medium level
            return render_template("generate.html", level=2)
        elif request.args.get("level") == "3":
            # Hardest level
            return render_template("generate.html", level=3)
        else:
            # Invalid level
            return redirect("/")