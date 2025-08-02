export interface Tutorial {
  id: string;
  title: string;
  description: string;
  category: string;
  steps: TutorialStep[];
}

export interface TutorialStep {
  id: number;
  title: string;
  description: string;
  command: string;
  explanation: string;
  output?: string;
}

export interface CodeExample {
  id: string;
  title: string;
  description: string;
  command: string;
  icon: string;
}

export const tutorials: Tutorial[] = [
  {
    id: "package-management",
    title: "Package Management",
    description: "Learn how to install and manage packages with UV",
    category: "basics",
    steps: [
      {
        id: 1,
        title: "Install a single package",
        description: "Use UV to install packages from PyPI with lightning speed",
        command: "uv pip install requests",
        explanation: "This command installs the requests package and its dependencies using UV's fast resolver",
        output: "Resolved 4 packages in 15ms\nDownloaded 4 packages in 102ms\nInstalled 4 packages in 8ms\n + certifi==2023.11.17\n + charset-normalizer==3.3.2\n + idna==3.6\n + requests==2.31.0"
      },
      {
        id: 2,
        title: "Install from requirements.txt",
        description: "Install multiple packages from a requirements file",
        command: "uv pip install -r requirements.txt",
        explanation: "UV can read standard requirements.txt files and install all specified packages efficiently",
        output: "Resolved 12 packages in 45ms\nDownloaded 8 packages in 234ms\nInstalled 12 packages in 67ms"
      },
      {
        id: 3,
        title: "Install with specific version",
        description: "Install a package with version constraints",
        command: "uv pip install 'django>=4.0,<5.0'",
        explanation: "Use version specifiers to control which version of a package gets installed",
        output: "Resolved 3 packages in 28ms\nDownloaded 1 package in 156ms\nInstalled 3 packages in 23ms\n + django==4.2.7"
      },
      {
        id: 4,
        title: "Install development dependencies",
        description: "Install packages for development only",
        command: "uv pip install -r requirements-dev.txt",
        explanation: "Separate development dependencies from production requirements",
        output: "Resolved 8 packages in 32ms\nDownloaded 5 packages in 198ms\nInstalled 8 packages in 45ms"
      }
    ]
  },
  {
    id: "virtual-environments",
    title: "Virtual Environments",
    description: "Create and manage isolated Python environments",
    category: "environments",
    steps: [
      {
        id: 1,
        title: "Create virtual environment",
        description: "Create a new virtual environment with UV",
        command: "uv venv my-project",
        explanation: "Creates a new virtual environment in the my-project directory",
        output: "Created virtual environment at: my-project"
      },
      {
        id: 2,
        title: "Activate environment",
        description: "Activate the virtual environment",
        command: "source my-project/bin/activate",
        explanation: "On Windows, use: my-project\\Scripts\\activate",
        output: "(my-project) $"
      },
      {
        id: 3,
        title: "Create with specific Python version",
        description: "Create environment with a specific Python version",
        command: "uv venv --python 3.11 my-project",
        explanation: "UV can automatically download and use specific Python versions",
        output: "Created virtual environment at: my-project\nUsing Python 3.11.7"
      }
    ]
  },
  {
    id: "dependency-management",
    title: "Dependencies",
    description: "Generate and manage dependency lock files",
    category: "dependencies",
    steps: [
      {
        id: 1,
        title: "Generate lock file",
        description: "Create a lock file from requirements.in",
        command: "uv pip compile requirements.in",
        explanation: "Generates requirements.txt with pinned versions for reproducible builds",
        output: "Generated requirements.txt from requirements.in"
      },
      {
        id: 2,
        title: "Sync dependencies",
        description: "Install exact versions from lock file",
        command: "uv pip sync requirements.txt",
        explanation: "Ensures the environment matches exactly what's in the lock file",
        output: "Synced environment with requirements.txt"
      },
      {
        id: 3,
        title: "Update dependencies",
        description: "Update lock file with latest versions",
        command: "uv pip compile --upgrade requirements.in",
        explanation: "Updates to the latest compatible versions and regenerates the lock file",
        output: "Updated requirements.txt with latest versions"
      }
    ]
  },
  {
    id: "project-setup",
    title: "Project Setup",
    description: "Initialize and configure new Python projects",
    category: "project",
    steps: [
      {
        id: 1,
        title: "Initialize new project",
        description: "Create a new Python project structure",
        command: "uv init my-project",
        explanation: "Creates a new project with standard structure and pyproject.toml",
        output: "Initialized project at: my-project"
      },
      {
        id: 2,
        title: "Add dependencies",
        description: "Add a new dependency to the project",
        command: "uv add requests",
        explanation: "Adds requests to pyproject.toml and installs it",
        output: "Added requests to dependencies"
      },
      {
        id: 3,
        title: "Run scripts",
        description: "Run project scripts with UV",
        command: "uv run python main.py",
        explanation: "Runs Python scripts in the project's environment",
        output: "Running main.py in project environment"
      }
    ]
  }
];

export const codeExamples: CodeExample[] = [
  {
    id: "requirements-lock",
    title: "requirements.lock.txt",
    description: "Generate pinned dependencies for reproducible builds",
    command: "uv pip compile requirements.in",
    icon: "fas fa-file-code"
  },
  {
    id: "sync-dependencies",
    title: "Sync Dependencies",
    description: "Synchronize environment with lock file",
    command: "uv pip sync requirements.lock.txt",
    icon: "fas fa-sync"
  },
  {
    id: "editable-installs",
    title: "Editable Installs",
    description: "Install packages in development mode",
    command: "uv pip install -e .",
    icon: "fas fa-layer-group"
  },
  {
    id: "list-packages",
    title: "List Packages",
    description: "Show installed packages and versions",
    command: "uv pip list",
    icon: "fas fa-list"
  },
  {
    id: "uninstall-packages",
    title: "Uninstall Packages",
    description: "Remove packages and their dependencies",
    command: "uv pip uninstall requests",
    icon: "fas fa-trash"
  },
  {
    id: "configuration",
    title: "Configuration",
    description: "Configure UV settings and preferences",
    command: "uv pip config --list",
    icon: "fas fa-cog"
  }
];

export const deploymentFiles = {
  renderYaml: `services:
  - type: web
    name: uv-fastapi-app
    env: python
    buildCommand: |
      pip install uv
      uv venv .venv
      source .venv/bin/activate
      uv pip install -r requirements.txt
    startCommand: source .venv/bin/activate && uvicorn main:app --host 0.0.0.0 --port $PORT
    envVars:
      - key: PYTHON_VERSION
        value: 3.11`,
  
  startSh: `#!/bin/bash
set -e

echo 'Installing UV...'
pip install uv

echo 'Creating virtual environment...'
uv venv .venv

echo 'Activating virtual environment...'
source .venv/bin/activate

echo 'Installing dependencies...'
uv pip install -r requirements.txt

echo 'Starting application...'
uvicorn main:app --host 0.0.0.0 --port \${PORT:-8000}`,

  fastApiExample: `from fastapi import FastAPI
import uvicorn

app = FastAPI(title='UV CLI Showcase API')

@app.get('/')
async def root():
    return {'message': 'UV-powered FastAPI app running!'}

@app.get('/health')
async def health_check():
    return {'status': 'healthy', 'package_manager': 'uv'}

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)`,

  migrationScript: `#!/usr/bin/env python3
import subprocess
import os

def migrate_to_uv():
    print('Migrating to UV...')
    
    # Install UV
    subprocess.run(['pip', 'install', 'uv'])
    
    # Create virtual environment
    subprocess.run(['uv', 'venv', '.venv'])
    
    # Install dependencies
    if os.path.exists('requirements.txt'):
        subprocess.run(['uv', 'pip', 'install', '-r', 'requirements.txt'])
    
    print('Migration complete!')

if __name__ == '__main__':
    migrate_to_uv()`
};
