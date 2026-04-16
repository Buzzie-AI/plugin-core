# Hawk Core Plugin for Claude Desktop

Connect your [Hawk](https://hawk.business) account to Claude Desktop. Get instant access to your invoices and customers — create, update, search, and manage them directly from a Claude conversation.

## What you can do

- **Invoices** — list, get, create, update, void
- **Customers** — list, get, create, update, deactivate
- **Ask Hawk** — chat with your business data in natural language

## Requirements

- A Hawk account at [hawk.business](https://hawk.business)
- Claude Desktop (Mac or Windows)
- Node.js 20.18.1 or later

## Install

### 1. Get your API key

In your Hawk dashboard go to **Settings → Integrations** and copy your **Channel API Key**.

### 2. Install mcp-remote

```bash
npm install -g mcp-remote
```

### 3. Add to Claude Desktop config

Open `~/Library/Application Support/Claude/claude_desktop_config.json` (Mac) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows) and add:

```json
{
  "mcpServers": {
    "hawk-core": {
      "command": "/path/to/node",
      "args": [
        "/path/to/mcp-remote/dist/proxy.js",
        "https://hawk.business/api/plugin/mcp/core",
        "--header",
        "Authorization: Bearer YOUR_API_KEY"
      ]
    }
  }
}
```

Replace `/path/to/node` with your Node 20+ binary (run `which node` to find it) and `YOUR_API_KEY` with the key from Step 1.

> **Tip:** Your Hawk dashboard at **Settings → Integrations → Claude Desktop Plugin** shows a pre-filled config snippet with your API key already inserted.

### 4. Restart Claude Desktop

The **hawk-core** tools will appear in the tool list. Try: *"Show me my unpaid invoices"* or *"Create an invoice for Acme Corp for $500"*.

## Tools

| Tool | Description |
|------|-------------|
| `list_invoices` | List invoices with optional status filter |
| `get_invoice` | Get a single invoice by ID |
| `create_invoice` | Create a new invoice |
| `update_invoice` | Update invoice fields (requires SyncToken) |
| `void_invoice` | Void an invoice |
| `list_customers` | List customers with optional search |
| `get_customer` | Get a single customer by ID |
| `create_customer` | Create a new customer |
| `update_customer` | Update customer fields (requires SyncToken) |
| `deactivate_customer` | Deactivate a customer |
| `ask_hawk` | Ask a question about your business data |

## Support

Open an issue in this repo or contact support via your Hawk dashboard.
