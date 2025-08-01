# Serena MCP Server Setup & Usage Guide

## Installation

### Option 1: Local Installation
```bash
git clone https://github.com/oraios/serena
cd serena
# Optional: edit configuration
uv run serena start-mcp-server
```

### Option 2: Direct with uvx
```bash
uvx --from git+https://github.com/oraios/serena serena start-mcp-server
```

### Option 3: Docker (Experimental)
```bash
docker run --rm -i --network host -v /path/to/your/projects:/workspaces/projects ghcr.io/oraios/serena:latest serena start-mcp-server
```

## Integration

- **Claude Code**: `claude mcp add serena`
- **Claude Desktop**: Configure MCP server in settings
- **Other MCP Clients**: Compatible with various IDEs and tools

## Configuration
Configured through multiple levels:
1. Global `serena_config.yml`
2. Client-specific arguments  
3. Project-specific `.serena/project.yml`
4. Active modes

## Key Features
- Semantic code retrieval and understanding
- Intelligent code editing capabilities
- Shell command execution
- Multi-language support
- Free and open-source

## Usage Tips
- Activate projects by path or name for better context
- Index larger projects for improved performance
- Use the full toolset for optimal results

The tool provides advanced semantic code analysis and editing capabilities, making it particularly useful for complex codebases where understanding relationships between code elements is important.