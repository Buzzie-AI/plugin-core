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

In your Hawk dashboard go to **Settings → Integrations → Claude Desktop Plugin** and copy your **Channel API Key**.

### 2. Add to Claude Desktop config

Open `~/Library/Application Support/Claude/claude_desktop_config.json` (Mac) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows) and add:

```json
{
  "mcpServers": {
    "hawk-core": {
      "command": "npx",
      "args": ["-y", "@buzzie-ai/hawk-core"],
      "env": {
        "HAWK_API_KEY": "YOUR_API_KEY"
      }
    }
  }
}
```

Replace `YOUR_API_KEY` with the key from Step 1.

> **Tip:** Your Hawk dashboard shows a pre-filled config snippet with your API key already inserted.

### 3. Restart Claude Desktop

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
