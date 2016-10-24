### Dispensary Object

<small>Cannabis dispensaries, deliveries, and retailers in the Cannabis Reports
  system.</small>

<hr>

Cannabis Reports currently refers to all types of retailers in the API as a
dispensary. Delivery services will not have an address associated with them,
only a location. The dispensary menus are split into strains, extracts,
edibles, and products.

<table class="table table-bordered table-hover">
  <tbody>
    <tr>
      <th>
        Name
      </th>
      <th>
        Type
      </th>
      <th>
        Description
      </th>
    </tr>
    <tr>
      <td>
        <div>
          <p>name</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Name of the dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>link</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to the dispensary in the Cannabis Reports API.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>qr</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to the QR code for this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>url</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to the dispensary listing on the Cannabis Reports website.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>image</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to the full size logo image for this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>state</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Two character representation of the state this dispensary is in.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>city</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>City this dispensary is in.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>lat</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Latitude of this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>lng</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Longitude of this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>address</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Object containing additional location information for this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>address.address1</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Street address for this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>address.address2</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Additional street address line for this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>address.zip</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Zip Code for this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>slug</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Identifier for this dispensary; a combination of city and state.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>reviews</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Object containing information about reviews for this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>reviews.count</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>integer</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>The number of reviews for items from this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>reviews.link</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to the reviews for this dispensary in the Cannabis Reports API.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>strains</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Object containing information about <a>strains</a> available at this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>strains.count</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>integer</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>The number of <a>flowers</a> available from the dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>strains.link</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to <a>flower</a> menu items available from this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>extracts</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Object containing information about <a>extracts</a> available at this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>extracts.count</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>integer</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>The number of <a>extracts</a> available at this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>extracts.link</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to <a>extracts</a> menu items available from this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>edibles</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Object containing information about <a>edibles</a> available at this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>edibles.count</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>integer</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Number of <a>edibles</a> available at this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>edibles.link</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to <a>edible</a> menu items available from this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>products</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Object containing information about <a>products</a> available at this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>products.count</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>integer</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>The number of <a>products</a> available at this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>products.link</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to <a>product</a> menu items available from this dispensary.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>updatedAt</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Object containing two strings, "dateTime" and the "timezone" when the dispensary was updated.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>createdAt</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Object containing two strings, "dateTime" and the "timezone" when the dispensary was added.</p>
        </div>

      </td>
    </tr>
  </tbody>
</table>

### Explore Dispensary Endpoints

<hr>

Here are some of the results available from the different dispensary endpoints:

<table class="table table-bordered table-hover">
  <tbody>
    <tr>
      <td>
        <div>
          <p><a>/dispensaries</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets a paginated list of dispensaries from the system.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/dispensaries/:state/:city/:slug</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets information about an individual dispensary based on the state, city, and slug.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/dispensaries/:state/:city/:slug/strains</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets a paginated list of strains for a dispensary from the given information.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/dispensaries/:state/:city/:slug/extracts</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets a paginated list of extracts for a dispensary from the given information.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/dispensaries/:state/:city/:slug/edibles</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets a paginated list of edibles for a dispensary from the given information.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p><a>/dispensaries/:state/:city/:slug/products</a></p>
        </div>

      </td>
      <td>
        <div>
          <p>Gets a paginated list of products for a dispensary from the given information.</p>
        </div>

      </td>
    </tr>
  </tbody>
</table>

<hr>

### Menu Item Object

<small>Menu items for dispensaries.</small>

<hr>

When getting menu items from dispensaries, the API will return an object
containing strain, extract, edible, or product, as well as the pricing
information for the item.

<table class="table table-bordered table-hover">
  <tbody>
    <tr>
      <th>
        Name
      </th>
      <th>
        Type
      </th>
      <th>
        Description
      </th>
    </tr>
    <tr>
      <td>
        <div>
          <p>name</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Name of the item.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>type</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Type of item: <a>strain</a>, <a>extract</a>, <a>edible</a>, or <a>product</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>item</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>The <a>strain</a>, <a>extract</a>, <a>edible</a>, or <a>product</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>price</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>The price for the item. This is <code>null</code> for <a>strains</a> and <a>extracts</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>price_half_gram</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Price for one half gram of the item. This is <code>null</code> for <a>edibles</a> and <a>products</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>price_gram</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Price for one gram of this item. This is <code>null</code> for <a>edibles</a> and <a>products</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>price_eighth</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Price for one eighth ounce of this item. This is <code>null</code> for <a>edibles</a> and <a>products</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>price_quarter</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Price for one quarter ounce of this item. This is <code>null</code> for <a>edibles</a> and <a>products</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>price_half_ounce</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Price for one half ounce of this item. This is <code>null</code> for <a>edibles</a> and <a>products</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>price_ounce</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Price for one ounce of this item. This is <code>null</code> for <a>edibles</a> and <a>products</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>updatedAt</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Object containing two strings, "dateTime" and the "timezone" when the dispensary was updated.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>createdAt</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Object containing two strings, "dateTime" and the "timezone" when the dispensary was added.</p>
        </div>

      </td>
    </tr>
  </tbody>
</table>

<hr>

### Menu Item Summary Object

<small>Menu item summary for when it is known what the menu item is.</small>

<hr>

When getting menu item information about an already known item, like in many of
our availability endpoints, the API will return pricing and location
information.

<table class="table table-bordered table-hover">
  <tbody>
    <tr>
      <th>
        Name
      </th>
      <th>
        Type
      </th>
      <th>
        Description
      </th>
    </tr>
    <tr>
      <td>
        <div>
          <p>name</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Name of the item.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>ucpc</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p><a>UCPC</a> of the item.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>type</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>The type of item this is: <a>strain</a>, <a>extract</a>, or <a>product</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>location</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Object containing information about the location this item is at.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>location.name</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Name of the location this item is at.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>location.link</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>url</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Link to this dispensary in the Cannabis Reports API.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>location.lat</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Latitude of the dispensary this item is at.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>location.lng</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Longitude of the dispensary this item is at.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>price</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>The price for the item. This is <code>null</code> for <a>strains</a> and <a>extracts</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>price_half_gram</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Price for one half gram of the item. This is <code>null</code> for <a>edibles</a> and <a>products</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>price_gram</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Price for one gram of this item. This is <code>null</code> for <a>edibles</a> and <a>products</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>price_eighth</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Price for one eighth ounce of this item. This is <code>null</code> for <a>edibles</a> and <a>products</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>price_quarter</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Price for one quarter ounce of this item. This is <code>null</code> for <a>edibles</a> and <a>products</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>price_half_ounce</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Price for one half ounce of this item. This is <code>null</code> for <a>edibles</a> and <a>products</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>price_ounce</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>string</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Price for one ounce of this item. This is <code>null</code> for <a>edibles</a> and <a>products</a>.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>updatedAt</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Object containing two strings, "dateTime" and the "timezone" when the dispensary was updated.</p>
        </div>

      </td>
    </tr>
    <tr>
      <td>
        <div>
          <p>createdAt</p>
        </div>

      </td>
      <td>
        <div>
          <p><code>object</code></p>
        </div>

      </td>
      <td>
        <div>
          <p>Object containing two strings, "dateTime" and the "timezone" when the dispensary was added.</p>
        </div>

      </td>
    </tr>
  </tbody>
</table>
